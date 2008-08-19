var t = new Test.Sample();

t.plan(2);
t.filters({ input: 'lower_case' });
t.run_is('input', 'output');

function lower_case(string) {
    return string.toLowerCase();
}

/* Test
=== Test Single line Lower Case
--- input
FoO BaR bAz
--- output
foo bar baz

=== Test Multiline Lower Case
--- input
FoO
BaR
bAz
--- output
foo
bar
baz

*/
