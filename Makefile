PANDOC = pandoc
IFORMAT = markdown+latex_macros
FLAGS = -s -t html --slide-level 3
TEMPLATE = page.tmpl
STYLE = css/style.css

%.html : %.md
	$(PANDOC) -f $(IFORMAT) $(FLAGS) --include-in-header script_header.js --filter pandoc-include -o $@ $<
