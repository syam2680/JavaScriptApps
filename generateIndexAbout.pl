use HTML::Template;
use Data::Dumper;
use JSON::Parse 'json_file_to_perl';

if(@ARGV!=1){
  printf("Use like $0 <JSON_TEMPLATE_FILE> \n");
  exit(0);
}

my $jsonConfig = json_file_to_perl("Config/".$ARGV[0]);



for my $function (keys %{$jsonConfig})
{
open F , ">Website/html/$function.html";


my $template = HTML::Template->new(filename => "Templates/".$jsonConfig->{$function}->{"TEMPLATE"});

$template->param();

print F $template->output();

close(F);
}
