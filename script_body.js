
<form id="form">
  <label for="eq">Enter an equation:</label>
  <input type="text" id="eq" value="4 * sin(x) + 5 * cos(x/2)" />
  <input type="submit" value="Draw" />
</form>

<div id="plot"></div>

<p>
  Plot library: <a href="https://github.com/maurizzzio/function-plot">https://github.com/maurizzzio/function-plot</a>
</p>

<script>
  function draw() {
    try {
      functionPlot({
        target: '#plot',
        data: [{
          fn: document.getElementById('eq').value,
          sampler: 'builtIn',  // this will make function-plot use the evaluator of math.js
          graphType: 'polyline'
        }]
      });
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }

  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();
</script>
