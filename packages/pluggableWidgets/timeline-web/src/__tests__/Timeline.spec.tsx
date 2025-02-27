import { createElement } from "react";
import { render } from "@testing-library/react";
import { TimelineContainerProps } from "../../typings/TimelineProps";
<<<<<<< HEAD
import { listExp, listWidget, list } from "@mendix/widget-plugin-test-utils";
import Timeline from "../Timeline";

describe("Timeline", () => {
=======
import { listExp, listWidget, ListValueBuilder } from "@mendix/widget-plugin-test-utils";
import Timeline from "../Timeline";

describe("Timeline", () => {
    const listValueBuilder = ListValueBuilder();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    const defaultProps: TimelineContainerProps = {
        name: "timeline",
        class: "test",
        tabIndex: 0,
        customVisualization: false,
        groupByKey: "day",
<<<<<<< HEAD
        data: list(2),
=======
        data: listValueBuilder.simple(),
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        groupEvents: false,
        title: listExp(() => "title1"),
        description: listExp(() => "description"),
        timeIndication: listExp(() => "time"),
        customIcon: listWidget(() => <img src={"test"} />),
        customGroupHeader: listWidget(() => <p>Custom Divider</p>),
        customTitle: listWidget(() => <p>Custom Title</p>),
        customEventDateTime: listWidget(() => <p>Custom Event Date Time</p>),
        customDescription: listWidget(() => <p>Custom Description</p>),
        groupByMonthOptions: "month",
        groupByDayOptions: "dayName",
        ungroupedEventsPosition: "end"
    };
    it("renders correctly with basic props", () => {
        const component = render(<Timeline {...defaultProps} />);
        expect(component.asFragment()).toMatchSnapshot();
    });
});
