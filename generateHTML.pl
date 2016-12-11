use HTML::Template;
use Data::Dumper;
use JSON::Parse 'json_file_to_perl';

if(@ARGV!=1){
  printf("Use like $0 <JSON_TEMPLATE_FILE> \n");
  exit(0);
}

my $jsonConfig = json_file_to_perl($ARGV[0]);

my @keysWithPageInfo = keys %{$jsonConfig};

my $allPages=[];

for my $t (@keysWithPageInfo)
{
  push($allPages,$jsonConfig->{$t}->{"PARAMS"}->{"PAGES"}->[0]);
}

for my $t (@keysWithPageInfo)
{
  $jsonConfig->{$t}->{"PARAMS"}->{"PAGES"}=$allPages;
}

for my $function (keys %{$jsonConfig})
{
open F , ">$function.html";

my $template = HTML::Template->new(filename => $jsonConfig->{$function}->{"TEMPLATE"});

$template->param($jsonConfig->{$function}->{"PARAMS"});

print F $template->output();

close(F);
}

=head
JS     => "numberThoeryLib.js",
TITLE => 'Java Script Apps',
NAV_BAR_TITLE => 'Java Script Apps',
PAGES => [
           {PAGE_NAME => 'Sam', PAGE_DISPLAY_NAME => 'programmer'},
           {PAGE_NAME => 'Steve', PAGE_DISPLAY_NAME => 'soda jerk'}
         ],
FUNCTION => 'FUNCTION : is Prime',
DESCRIPTION => 'DESCRIPTION : Checks if the given input is a prime number.',
BACKGROUND => 'BACKGROUND : A number whose factors are 1 and itself is a Prime Number',
JS_FUNCTION => 'runIsPrime();',
BUTTON_TEXT => 'Is Prime ?'
=cut
