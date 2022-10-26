import {
  map,
  min,
  max,
  range,
  InternSet,
  scaleBand,
  axisBottom,
  axisLeft,
  create,
  scaleLinear,
  scaleLog,
  select,
  zip,
} from "d3";
import { getPalette } from "./palettes";
import { Tooltip } from "./tooltip";

export default function BarChart(
  data,
  {
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = (d) => d, // given d in data, returns the (quantitative) y-value
    width = 512, // the outer width of the chart, in pixels
    height = 512, // the outer height of the chart, in pixels
    xDomain, // an array of (ordinal) x-values
    yDomain, // [ymin, ymax]
    title, // given d in data, returns the title text
    yLabel, // a label for the y-axis
    xLabel, // a label for the y-axis
    scaling, // type of scaling
    theme = "dark",
    tooltipGenerator = Tooltip,
    tooltips,
  } = {}
) {
  // Compute values.
  const X = map(data, x);
  const Y = map(data, y);
  console.log(Y);

  // Compute default domains, and unique the x-domain.
  if (xDomain === undefined) xDomain = X;
  if (yDomain === undefined) yDomain = [min([0, min(Y)]), max(Y)];
  xDomain = new InternSet(xDomain);

  // the top margin, in pixels
  let marginTop = 12 + (title !== undefined ? 32 : 0),
    // the right margin, in pixels
    marginRight = 0,
    // the bottom margin, in pixels
    marginBottom = 20 + (xLabel !== undefined ? 28 : 0),
    // the left margin, in pixels
    marginLeft = 4 + (yLabel !== undefined ? 24 : 0),
    // y-scale type
    scalingType = scaling == "linear" ? scaleLinear : scaleLog,
    // [bottom, top]
    yRange = [height - marginBottom, marginTop],
    // amount of x-range to reserve to separate bars
    xPadding = 0.4,
    // [left, right]
    xRange = [marginLeft, width - marginRight],
    colors = getPalette(theme);

  // Omit any data not present in the x-domain.
  const I = range(X.length).filter((i) => xDomain.has(X[i]));

  // Construct scales, axes, and formats.
  const xScale = scaleBand(xDomain, xRange).padding(xPadding);
  const yScale = scalingType(yDomain, yRange);
  const xAxis = axisBottom(xScale).tickSizeOuter(0);
  const yAxis = axisLeft(yScale).ticks(height / 40);

  const svg = create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("version", "1.1")
    .attr(
      "style",
      `background-color: ${colors.background};padding:1rem;border-radius:.5rem;border:1px solid ${colors.border}`
    );

  const { mouseover, mousemove, mouseleave } = tooltipGenerator(theme, svg);

  if (title) addTitle();

  addYAxis();

//   addBars();

  addXAxis();

  svg
    .selectAll(".tick")
    .attr("font-family", "Roboto, sans-serif")
    .attr("font-weight", "700")
    .attr("font-size", ".875rem");

  svg.select(".tooltip").raise();

  return svg.node();

  function addXAxis() {
    svg
      .append("g")
      .attr("style", `color:${colors.title}`)
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .call((g) =>
        xLabel
          ? g
              .append("text")
              .attr("x", (width >> 1) + marginLeft)
              .attr("y", 42)
              .attr("fill", colors.ticks)
              .attr("text-anchor", "center")
              .attr("font-size", ".875rem")
              .attr(
                "font-family",
                "Neue Machina, Neuemachina, Roboto, sans-serif"
              )
              .attr("letter-spacing", 2.5)
              .text(xLabel)
          : undefined
      )
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").attr("display", "none"));
  }

  function addBars() {
    svg
      .append("g")
      .selectAll("rect")
      .data(I)
      .join("rect")
      .attr("x", (i) => xScale(X[i]))
      .attr("y", (i) => yScale(Y[i]))
      .attr("fill", (d) => colors.data[d % colors.data.length])
      .attr("height", (i) => yScale(0) - yScale(Y[i]))
      .attr("width", xScale.bandwidth())
      .on("mouseover", mouseover)
      .on(
        "mousemove",
        mousemove(map(tooltips, ([a, b]) => zip(map(data, a), map(data, b))))
      )
      .on("mouseleave", mouseleave);
  }

  function addYAxis() {
    svg
      .append("g")
      .call(yAxis)
      .call((g) => {
        marginLeft += g.selectAll(".tick text").text().toString().length * 8;
      })
      .attr("transform", `translate(${marginLeft},0)`)
      .attr("style", `color:${colors.ticks}`)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 1)
          .attr("color", colors.grid)
      )
      .call((g) =>
        yLabel
          ? g
              .append("text")
              .attr("x", (-height >> 1) + marginBottom)
              .attr("y", -50)
              .attr("fill", colors.ticks)
              .attr("text-anchor", "center")
              .attr("font-size", ".875rem")
              .attr("transform", "rotate(-90)")
              .attr(
                "font-family",
                "Neue Machina, Neuemachina, Roboto, sans-serif"
              )
              .attr("letter-spacing", 2.5)
              .attr("style", "z-index:10")
              .text(yLabel)
          : undefined
      );
  }

  function addTitle() {
    svg
      .append("text")
      .text(title)
      .attr("fill", colors.title)
      .attr("font-size", "1.25rem")
      .attr("font-family", "Neue Machina, Neuemachina, Roboto, sans-serif")
      .attr("letter-spacing", 2.5)
      .attr("x", 0)
      .attr("y", 16);
  }
}
