<<<<<<< HEAD
import { ChartWidget } from "@mendix/shared-charts/main";
import { list, listExp, EditableValueBuilder, ListAttributeValueBuilder } from "@mendix/widget-plugin-test-utils";
import Big from "big.js";
import { mount, ReactWrapper } from "enzyme";
=======
import { ChartWidget } from "@mendix/shared-charts/common";
import {
    dynamicValue,
    EditableValueBuilder,
    ListAttributeValueBuilder,
    ListValueBuilder
} from "@mendix/widget-plugin-test-utils";
import Big from "big.js";
import { mount, ReactWrapper } from "enzyme";
import { ListExpressionValue } from "mendix";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { createElement } from "react";
import { SeriesType } from "../../typings/AreaChartProps";
import { AreaChart } from "../AreaChart";

jest.mock("react-plotly.js", () => jest.fn(() => null));

describe("The AreaChart widget", () => {
    function renderAreaChart(configs: Array<Partial<SeriesType>>): ReactWrapper {
        return mount(
            <AreaChart
                name="line-chart-test"
                class="line-chart-class"
                series={configs.map(setupBasicSeries)}
                showLegend={false}
                widthUnit="percentage"
                width={0}
                heightUnit="pixels"
                height={0}
                gridLines="none"
                customLayout=""
                customConfigurations=""
                enableThemeConfig={false}
                enableAdvancedOptions={false}
                showPlaygroundSlot={false}
            />
        );
    }

    it("visualizes data as a area chart", () => {
        const areaChart = renderAreaChart([{}]);
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(1);
        expect(data[0]).toHaveProperty("type", "scatter");
        expect(data[0]).toHaveProperty("fill", "tonexty");
    });

    it("sets the mode on the data series based on the lineStyle value", () => {
        const areaChart = renderAreaChart([{ lineStyle: "lineWithMarkers" }, { lineStyle: "line" }]);
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty("mode", "lines+markers");
        expect(data[1]).toHaveProperty("mode", "lines");
    });

    it("sets the line shape on the data series based on the interpolation value", () => {
        const areaChart = renderAreaChart([{ interpolation: "linear" }, { interpolation: "spline" }]);
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty("line.shape", "linear");
        expect(data[1]).toHaveProperty("line.shape", "spline");
    });

    it("sets the line color on the data series based on the lineColor value", () => {
<<<<<<< HEAD
        const areaChart = renderAreaChart([{ staticLineColor: listExp(() => "red") }, { staticLineColor: undefined }]);
=======
        const areaChart = renderAreaChart([{ staticLineColor: exp("red") }, { staticLineColor: undefined }]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty("line.color", "red");
        expect(data[1]).toHaveProperty("line.color", undefined);
    });

    it("sets the marker color on the data series based on the markerColor value", () => {
<<<<<<< HEAD
        const areaChart = renderAreaChart([
            { staticMarkerColor: undefined },
            { staticMarkerColor: listExp(() => "blue") }
        ]);
=======
        const areaChart = renderAreaChart([{ staticMarkerColor: undefined }, { staticMarkerColor: exp("blue") }]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty("marker.color", undefined);
        expect(data[1]).toHaveProperty("marker.color", "blue");
    });

    it("sets the area color on the data series based on the fillcolor value", () => {
<<<<<<< HEAD
        const areaChart = renderAreaChart([
            { staticFillColor: undefined },
            { staticFillColor: listExp(() => "#393393") }
        ]);
=======
        const areaChart = renderAreaChart([{ staticFillColor: undefined }, { staticFillColor: exp("#393393") }]);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty("fillcolor", undefined);
        expect(data[1]).toHaveProperty("fillcolor", "#393393");
    });

    it("sets the appropriate transforms on the data series based on the aggregation type", () => {
        const areaChart = renderAreaChart([{ aggregationType: "none" }, { aggregationType: "avg" }]);
        const data = areaChart.find(ChartWidget).prop("data");
        expect(data).toHaveLength(2);
        expect(data[0]).toHaveProperty("transforms", []);
        expect(data[1]).toHaveProperty("transforms", [
            {
                type: "aggregate",
                groups: ["1", "2"],
                aggregations: [
                    {
                        target: "y",
                        enabled: true,
                        func: "avg"
                    }
                ]
            }
        ]);
    });
});

function setupBasicSeries(overwriteConfig: Partial<SeriesType>): SeriesType {
    const xAttribute = new ListAttributeValueBuilder<Big>().build();
    const getXAttributeMock = jest.fn();
    getXAttributeMock.mockReturnValueOnce(new EditableValueBuilder<Big>().withValue(new Big(1)).build());
    getXAttributeMock.mockReturnValueOnce(new EditableValueBuilder<Big>().withValue(new Big(2)).build());
    xAttribute.get = getXAttributeMock;

    const yAttribute = new ListAttributeValueBuilder<Big>().build();
    const getYAttributeMock = jest.fn();
    getYAttributeMock.mockReturnValueOnce(new EditableValueBuilder<Big>().withValue(new Big(3)).build());
    getYAttributeMock.mockReturnValueOnce(new EditableValueBuilder<Big>().withValue(new Big(6)).build());
    yAttribute.get = getYAttributeMock;

    return {
        dataSet: "static",
        customSeriesOptions: overwriteConfig.customSeriesOptions ?? "",
        aggregationType: overwriteConfig.aggregationType ?? "avg",
        interpolation: overwriteConfig.interpolation ?? "linear",
        lineStyle: overwriteConfig.lineStyle ?? "line",
        staticLineColor: overwriteConfig.staticLineColor ?? undefined,
        staticMarkerColor: overwriteConfig.staticMarkerColor ?? undefined,
        staticFillColor: overwriteConfig.staticFillColor ?? undefined,
<<<<<<< HEAD
        staticDataSource: list(2),
=======
        staticDataSource: ListValueBuilder().simple(),
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        staticXAttribute: xAttribute,
        staticYAttribute: yAttribute
    };
}
<<<<<<< HEAD
=======

function exp(value: string): ListExpressionValue<string> {
    return { get: () => dynamicValue(value) } as unknown as ListExpressionValue<string>;
}
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
