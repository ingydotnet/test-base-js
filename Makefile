.PHONY: all manifest dist doc

all: doc sample manifest

manifest:
	find . -type f | perl -pe 's/..//' > MANIFEST

dist: doc manifest META.yml
	H=`pwd`; \
	N=`perl -MYAML -e 'print((YAML::LoadFile("META.yml"))->{name})'`; \
	V=`perl -MYAML -e 'print((YAML::LoadFile("META.yml"))->{version})'`; \
	D="$${N}-$${V}"; \
	rm -fr "/tmp/$$D"; \
	cat MANIFEST | cpio -dump "/tmp/$$D"; \
	cd /tmp; tar czvf "$${D}.tar.gz" $$D; rm -r $$D; \
	cd $$H; mv "/tmp/$${D}.tar.gz" ./

doc:
	make -C doc
