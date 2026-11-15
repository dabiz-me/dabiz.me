#!/usr/bin/env ruby
# frozen_string_literal: true
# Run after: JEKYLL_ENV=production bundle exec jekyll build
require "rexml/document"
require "uri"

root = ARGV.fetch(0, "_site")
expected_paths = [
  "/", "/ia-y-tecnologia/", "/soluciones-negocios/",
  "/ingenieria-software/", "/sobre-mi/",
  "/casos/identidad-multitenant/", "/casos/integraciones/",
  "/casos/rest-eventos/"
]
expected = expected_paths.map { |p| "https://dabiz.me#{p}" }.sort
sitemap_path = File.join(root, "sitemap.xml")
abort "Missing #{sitemap_path}" unless File.file?(sitemap_path)

xml = REXML::Document.new(File.read(sitemap_path))
namespace = { "sm" => "http://www.sitemaps.org/schemas/sitemap/0.9" }
urls = REXML::XPath.match(xml, "/sm:urlset/sm:url/sm:loc", namespace).map { |e| e.text.to_s.strip }
abort "Sitemap is empty or has the wrong namespace" if urls.empty?
abort "Duplicated URLs in sitemap" unless urls.uniq.size == urls.size
abort "Unexpected sitemap URLs:\n#{(urls - expected).join("\n")}" unless (urls - expected).empty?
abort "Missing sitemap URLs:\n#{(expected - urls).join("\n")}" unless (expected - urls).empty?

expected_paths.each do |path|
  file = path == "/" ? "index.html" : File.join(path.delete_prefix("/"), "index.html")
  abort "Missing public page: #{file}" unless File.file?(File.join(root, file))
end

%w[servicios proyectos-y-casos como-trabajo].each do |slug|
  file = File.join(root, slug, "index.html")
  abort "Missing historical redirect: #{slug}" unless File.file?(file)
end

abort "Legacy about page still published" if File.exist?(File.join(root, "about", "index.html"))
abort "Editorial document leaked" if File.exist?(File.join(root, "docs", "editorial", "casos-v5.1.md"))

html_files = Dir.glob(File.join(root, "**", "*.html"))
legacy_slugs = %w[welcome-to-jekyll third-post four-post second-post five-post six-post]
leaked = html_files.select do |file|
  path = file.delete_prefix("#{root}/").downcase
  legacy_slugs.any? { |slug| path.include?(slug) } ||
    path.match?(%r{(?:^|/)(?:seience|jekyll|update|blog)(?:/|$)}) ||
    path.match?(%r{(?:^|/)(?:2017|2018)(?:/|$)})
end
abort "Legacy posts or archives generated:\n#{leaked.join("\n")}" unless leaked.empty?

robots = File.join(root, "robots.txt")
abort "Missing robots.txt" unless File.file?(robots)
abort "robots.txt does not declare sitemap" unless File.read(robots).include?("Sitemap: https://dabiz.me/sitemap.xml")

puts "SEO validation OK: 8 canonical sitemap URLs, redirects preserved, no legacy HTML detected."
