.PHONY: all clean purge

RENDERER:=$(shell echo `js-cpan Test/Base/bin/render-template`)
TEST_TEMPLATE:=$(shell echo `js-cpan Test/Base/template/test.html`)
INDEX_TEMPLATE:=$(shell echo `js-cpan Test/Base/template/index.html`)

TEST_TEMPLATE_MD5=$(word 1,$(shell md5sum $(TEST_TEMPLATE)))
TEST_LOCAL_MD5=$(word 1,$(shell md5sum template/test.html))
INDEX_TEMPLATE_MD5=$(word 1,$(shell md5sum $(INDEX_TEMPLATE)))
INDEX_LOCAL_MD5=$(word 1,$(shell md5sum template/index.html))

ALL_T_HTML:=$(shell ls -1 t/*.t.js | perl -pe 's/js$$/html/;s/^t\///')

ALL_DIRS:=lib template

ALL_TARGETS:=$(ALL_T_HTML) index.html

ALL_LIBS= \
	lib/Test/Base.js \
	lib/Test/Builder.js \
	lib/Test/Harness.js \
	lib/Test/Harness/Browser.js \

all: $(ALL_DIRS) $(ALL_TARGETS) $(ALL_LIBS)

clean:
	rm -fr $(ALL_TARGETS) $(ALL_LIBS)
	if [ "$(TEST_TEMPLATE_MD5)" = \
     "$(TEST_LOCAL_MD5)" ]; then rm -f template/test.html; fi
	if [ "$(INDEX_TEMPLATE_MD5)" = \
     "$(INDEX_LOCAL_MD5)" ]; then rm -f template/index.html; fi
	-find $(ALL_DIRS) -depth -type d | xargs rmdir 2> /dev/null


purge: clean
	rm Makefile config.yaml

%.t.html: template/test.html
	perl $(RENDERER) $(notdir $<) $(@:%.t.html=t/%.t.js) > $@

index.html: template/index.html t/*.t.js
	perl $(RENDERER) $(notdir $<) $(@:%.t.html=t/%.t.js) > $@

lib/Test/Base.js: lib/Test
	cp -f `js-cpan Test.Base` $@

lib/Test/Builder.js: lib/Test
	cp -f `js-cpan Test.Builder` $@

lib/Test/Harness.js: lib/Test
	cp -f `js-cpan Test.Harness` $@

lib/Test/Harness/Browser.js: lib/Test/Harness
	cp -f `js-cpan Test.Harness.Browser` $@

lib lib/Test lib/Test/Harness:
	mkdir -p $@

template/test.html:
	cp -f $(TEST_TEMPLATE) $@

template/index.html:
	cp -f $(INDEX_TEMPLATE) $@

template:
	mkdir -p $@
