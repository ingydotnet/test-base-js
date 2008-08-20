use inc::Module::Install;

all_from 'lib/JS/Test/Base.pod';

requires 'JS' => '0.15';
requires 'JS::Test::Simple' => '0.27';

clean_files 'META.yml';

WriteAll;

