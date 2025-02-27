<<<<<<< HEAD
import { render } from "@testing-library/react";
import { createElement } from "react";
import ReactDOM from "react-dom";
import { FilterComponent, FilterComponentProps } from "../FilterComponent";

const commonProps: FilterComponentProps = {
    adjustable: true,
    class: "",
    filterFn: "equal",
    onChange: jest.fn(),
    onFilterChange: jest.fn(),
    expanded: false,
    tabIndex: 0
=======
import { render } from "enzyme";
import { createElement } from "react";
import { FilterComponent, FilterComponentProps } from "../FilterComponent";
import ReactDOM from "react-dom";

const commonProps: FilterComponentProps = {
    name: "DateFilter",
    adjustable: true,
    filterAPIClient: null,
    syncChannel: null,
    class: "",
    tabIndex: 0,
    defaultFilter: "equal",
    initValues: {
        type: "equal",
        value: null,
        startDate: null,
        endDate: null
    }
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
};

describe("Filter component", () => {
    beforeAll(() => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.123456789);

        jest.spyOn(ReactDOM, "createPortal").mockImplementation((element, _node, _key) => {
            return element as ReturnType<typeof ReactDOM.createPortal>;
        });
    });

    it("renders correctly", () => {
        const component = render(<FilterComponent {...commonProps} />);

<<<<<<< HEAD
        expect(component.asFragment()).toMatchSnapshot();
=======
        expect(component).toMatchSnapshot();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    });

    it("renders correctly when not adjustable by user", () => {
        const component = render(<FilterComponent {...commonProps} adjustable={false} />);

<<<<<<< HEAD
        expect(component.asFragment()).toMatchSnapshot();
=======
        expect(component).toMatchSnapshot();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    });

    it("renders correctly with aria labels", () => {
        const component = render(
            <FilterComponent
                {...commonProps}
                screenReaderButtonCaption="my label"
                screenReaderInputCaption="my label"
            />
        );

<<<<<<< HEAD
        expect(component.asFragment()).toMatchSnapshot();
=======
        expect(component).toMatchSnapshot();
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    });
});
