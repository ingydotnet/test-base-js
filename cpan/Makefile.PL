use inc::Module::Install;

all_from 'lib/JS/Test/Base.pod';

requires 'JS' => '0.14';

clean_files 'tests/*.js tests/index.html META.yml';

WriteAll;

