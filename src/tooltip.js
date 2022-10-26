import { pointer, select } from "d3";
import { getPalette } from "./palettes";

export function Tooltip(theme = "dark", parent) {
  const colors = getPalette(theme);
  const tooltip = parent
    .append("g")
    .style("display", "none")
    .attr("class", "tooltip");

  const bg = tooltip
    .append("rect")
    .attr("fill", colors.background)
    .attr("border-width", "1px")
    .attr("stroke", colors.border)
    .style("rx", "4")
    .style("overflow", "hidden");

  const tooltipContent = tooltip
    .append("g")
    .attr("fill", colors.title)
    .attr("font-family", "Roboto, sans-serif");

  const mouseover = (d) => {
    tooltip.style("opacity", 1);
    select(d.target).style("opacity", 1);
  };

  const mousemove = (values) => {
    const parentView = parent.attr("viewBox"),
      hInd = parentView.lastIndexOf(",") + 1,
      parentHeight = parentView.slice(hInd),
      parentWidth = parentView.slice(parentView.lastIndexOf(",", hInd) + 1);

    return (d, a) => {
      const mouse = pointer(d);

      tooltipContent.html("");

      for (var i = 0; i < values.length; i++) {
        const label = `${values[i][a][0]}: ${values[i][a][1]}`;
        tooltipContent
          .append("text")
          .attr("x", 8)
          .attr("y", 20 + 19.2 * i)
          .style("width", 20)
          .style("overflow", "hidden")
          .text(label)
          .attr("fill", colors.border)
          .attr("font-family", "Roboto, sans-serif")
          .attr("font-weight", 600);
      }
      const container = tooltipContent.node().getBBox();

      bg.attr("width", container.width + 16).attr(
        "height",
        container.height + 12
      );

      const tooltipCont = tooltip.node().getBBox();
      if (parentHeight < mouse[1] + tooltipCont.height) {
        mouse[1] = parentHeight - tooltipCont.height - 1;
      }

      if (parentWidth < mouse[0] - (tooltipCont.width - 16) ) {
        mouse[0] -= tooltipCont.width + 64;
      }

      tooltip
        .attr("transform", `translate(${mouse[0] + 32},${mouse[1]})`)
        .style("display", "block");
    };
  };

  const mouseleave = (d) => {
    tooltip.style("display", "none");
    select(d.target).style("opacity", 0.9);
  };

  return { mouseover, mousemove, mouseleave };
}
