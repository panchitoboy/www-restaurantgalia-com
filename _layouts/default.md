<!DOCTYPE html>
<html lang="fr">
{% include head.html %}
<body id="top">
  {% include header.html %} 
  
  {{ content }} 
  
  {% include footer.html %}
  
  {% include scripts.html %}
  <script type="text/javascript">
    $(".sticky-header").sticky({
      topSpacing: 0
    });
  </script>
  
  {% if page.script %}
    <script type="text/javascript">
    {% include {{page.script}} %}
    </script>
  {% endif %}
</body>
</html >