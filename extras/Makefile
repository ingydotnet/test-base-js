.PHONY: all clean purge

RENDERER:=$(shell echo `js-cpan Test/Base/bin/render-template`)
TEST_TEMPLATE:=$(shell echo `js-cpan Test/Base/template/test.html`)
INDEX_TEMPLATE:=$(shell echo `js-cpan Test/Base/template/index.html`)

ALL_T_HTML:=$(shell ls -1 t/*.t.js | perl -pe 's/js$$/html/;s/^t\///')

ALL_TARGETS:=$(ALL_T_HTML) index.html

ALL_LIBS= \
	lib/Test/Base.js \
	lib/Test/Builder.js \
	lib/Test/Harness/Browser.js \
	lib/Test/Harness.js \

all: $(ALL_TARGETS) $(ALL_LIBS)

clean:
	rm -fr $(ALL_TARGETS) $(ALL_LIBS) lib/Test/Harness template

purge: clean
	rm Makefile config.yaml

%.t.html: template/test.html
	perl $(RENDERER) $(notdir $<) $(@:%.t.html=t/%.t.js) > $@

index.html: template/index.html t/*.t.js
	perl $(RENDERER) $(notdir $<) $(@:%.t.html=t/%.t.js) > $@

lib/Test/Base.js: lib/Test
	cp `js-cpan Test.Base` $@

lib/Test/Builder.js: lib/Test
	cp `js-cpan Test.Builder` $@

lib/Test/Harness.js: lib/Test
	cp `js-cpan Test.Harness` $@

lib/Test/Harness/Browser.js: lib/Test/Harness
	cp `js-cpan Test.Harness.Browser` $@

lib/Test lib/Test/Harness:
	mkdir -p $@

template/test.html: template
	cp $(TEST_TEMPLATE) $@

template/index.html: template
	cp $(INDEX_TEMPLATE) $@

template:
	mkdir -p $@
