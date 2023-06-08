<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @routes
    @inertiaHead
    @vite('resources/css/app.css')
    @vite('resources/js/app.jsx')
    @viteReactRefresh
    <script>
      window.base_url = "{{url("/")}}"
    </script>
  </head>
  <body>
    @inertia
  </body>
</html>