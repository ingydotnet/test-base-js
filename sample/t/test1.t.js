var t = new Test.Sample();

t.plan(1);
t.filters({ input: 'upper_case' });
t.run_is('input', 'output');

/* Test
=== Test Multiline Upper Case
--- input
foo
bar
baz
--- output
FOO
BAR
BAZ

*/
