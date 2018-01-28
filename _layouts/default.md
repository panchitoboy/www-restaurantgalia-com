<!DOCTYPE html>
<html lang="fr">
{% include head.html %}
<body id="top">
  {% include header.html %} 
  
  {{ content }} 
  
  {% include footer.html %}

  {% if page.script %}
	  <script async type="text/javascript" src="{{ page.script | prepend: site.baseurl }}"></script> 
  {% endif %}
</body>
</html >