.PHONY: all clean

SOURCE=pod/Test/Base.pod

all: html/Test/Base.html text/Test/Base.text

html/Test/Base.html: $(SOURCE) html/Test
	pod2html $< > $@
	rm pod2htm*.tmp

text/Test/Base.text: $(SOURCE) text/Test
	pod2text $< > $@

html/Test text/Test:
	mkdir -p $@

clean:
	rm -fr html text
