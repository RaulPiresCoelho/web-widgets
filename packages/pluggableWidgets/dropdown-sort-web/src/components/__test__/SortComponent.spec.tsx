<<<<<<< HEAD
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createElement } from "react";
import { SortComponent, SortOption } from "../SortComponent";

const defaultOptions: SortOption[] = [
    { caption: "Empty option", value: null },
=======
import { render, shallow } from "enzyme";
import { createElement } from "react";
import { SortComponent, SortOption } from "../SortComponent";
import { render as renderTestingLib, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const defaultOptions: SortOption[] = [
    { caption: "Empty option", value: "" },
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    { caption: "1", value: "_1" },
    { caption: "2", value: "_2" },
    { caption: "3", value: "_3" }
];

jest.useFakeTimers();

describe("Sort selector", () => {
    describe("renders correctly", () => {
        it("with options", () => {
<<<<<<< HEAD
            const component = render(<SortComponent options={defaultOptions} direction="asc" value={null} />);

            expect(component.container).toMatchSnapshot();
        });

        it("with no options", () => {
            const component = render(<SortComponent options={[]} direction="asc" value={null} />);

            expect(component.container).toMatchSnapshot();
        });

=======
            const component = render(<SortComponent options={defaultOptions} />);

            expect(component).toMatchSnapshot();
        });
        it("with no options", () => {
            const component = render(<SortComponent options={[]} />);

            expect(component).toMatchSnapshot();
        });
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        it("with a11y properties", () => {
            const component = render(
                <SortComponent
                    options={defaultOptions}
<<<<<<< HEAD
                    direction="asc"
                    value={null}
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                    screenReaderButtonCaption="my button"
                    screenReaderInputCaption="my input"
                />
            );

<<<<<<< HEAD
            expect(component.container).toMatchSnapshot();
        });

        it("with placeholder", () => {
            const component = render(
                <SortComponent options={defaultOptions} placeholder={"find me"} direction="asc" value={null} />
            );

            expect(component.container).toMatchSnapshot();
            expect(component.asFragment().querySelector("input")?.getAttribute("placeholder")).toBe("find me");
        });
    });

    it("selects default option", () => {
        const defaultOption = defaultOptions[1];
        const { asFragment } = render(
            <SortComponent options={defaultOptions} value={defaultOption.value} direction="asc" />
        );
        expect(asFragment().querySelector("input")?.getAttribute("value")).toBe(defaultOption.caption);
    });

    describe("when value changes", () => {
        it("calls onSelect when value changes", async () => {
            const onSelectHandler = jest.fn();
            const component = render(
                <SortComponent
                    placeholder="TestInput"
                    options={defaultOptions}
                    onSelect={onSelectHandler}
                    direction="asc"
                    value={null}
                />
            );

            const input = component.container.querySelector("input");
            await fireEvent.click(input as Element);

            const items = component.queryAllByRole("menuitem");
            await fireEvent.click(items[0]);

            expect(onSelectHandler).toHaveBeenCalled();
        });

        it("shows selected option on input value", async () => {
            let defaultOption = defaultOptions[1];
            const component = render(
                <SortComponent
                    options={defaultOptions}
                    value={defaultOption.value}
                    direction="asc"
                    onSelect={option => (defaultOption = option)}
                />
            );

            const input = component.container.querySelector("input");
            fireEvent.click(input as Element);

            expect(input?.getAttribute("value")).toBe(defaultOption.caption);

            const item = component.queryAllByRole("menuitem")[defaultOptions.length - 1];
            fireEvent.click(item);

            component.rerender(
                <SortComponent
                    options={defaultOptions}
                    value={defaultOption.value}
                    direction="asc"
                    onSelect={option => (defaultOption = option)}
                />
            );
            expect(component.container.querySelector("input")?.getAttribute("value")).toBe(defaultOptions[3].caption);
=======
            expect(component).toMatchSnapshot();
        });
        it("with emptyOptioncaption", () => {
            const component = render(<SortComponent options={defaultOptions} emptyOptionCaption={"find me"} />);

            expect(component).toMatchSnapshot();
            expect(component.find("input").first().prop("placeholder")).toBe("find me");
        });
    });
    it("selects default option", () => {
        const defaultOption = defaultOptions[0];
        const component = shallow(<SortComponent options={defaultOptions} defaultOption={defaultOption} />);

        const input = component.find("input").first();

        expect(input.prop("value")).toBe(defaultOption.caption);
    });

    describe("when value changes", () => {
        it("calls updateFilters when value changes", () => {
            const onClickProps = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
            const updateSortHandler = jest.fn();
            const component = shallow(<SortComponent options={defaultOptions} updateSort={updateSortHandler} />);

            const input = component.find("input");
            input.simulate("click", onClickProps);

            const item = component.find("li").first();
            item.simulate("click", onClickProps);

            expect(updateSortHandler).toBeCalled();
        });
        it("shows selected option on input value", () => {
            const onClickProps = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
            const defaultOption = defaultOptions[1];
            const component = shallow(<SortComponent options={defaultOptions} defaultOption={defaultOption} />);

            const input = component.find("input");
            input.simulate("click", onClickProps);

            expect(component.find("input").first().prop("value")).toBe(defaultOption.caption);

            const item = component.find("li").last(); // [cap 3: val:_3]
            item.simulate("click", onClickProps);

            expect(component.find("input").first().prop("value")).toBe(defaultOptions[3].caption);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        });
    });

    describe("focus", () => {
        it("changes focused element when pressing the input", async () => {
<<<<<<< HEAD
            render(<SortComponent options={defaultOptions} placeholder="Click me" direction="asc" value={null} />);
=======
            renderTestingLib(<SortComponent options={defaultOptions} emptyOptionCaption="Click me" />);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            expect(document.body).toHaveFocus();
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

            const input = screen.getByPlaceholderText("Click me");
            expect(input).toBeDefined();
<<<<<<< HEAD

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            await user.click(input);

            jest.runOnlyPendingTimers();

<<<<<<< HEAD
            const items = screen.queryAllByRole("menuitem");
=======
            const items = screen.getAllByRole("menuitem");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            expect(items[0]).toHaveFocus();
        });

        it("changes focused element back to the input when pressing shift+tab in the first element", async () => {
<<<<<<< HEAD
            render(<SortComponent options={defaultOptions} placeholder="Click me" direction="asc" value={null} />);
=======
            renderTestingLib(<SortComponent options={defaultOptions} emptyOptionCaption="Click me" />);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
            expect(document.body).toHaveFocus();
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

            const input = screen.getByPlaceholderText("Click me");
            expect(input).toBeDefined();
            await user.click(input);

            jest.runOnlyPendingTimers();

            const items = screen.getAllByRole("menuitem");
            expect(items[0]).toHaveFocus();

            await user.tab({ shift: true });

            jest.runOnlyPendingTimers();

            expect(input).toHaveFocus();
        });

        it("changes focused element back to the input when pressing tab on the last item", async () => {
<<<<<<< HEAD
            render(
                <SortComponent
                    options={[
                        { caption: "Click me", value: null },
                        { caption: "1", value: "_1" }
                    ]}
                    placeholder="Click me"
                    direction="asc"
                    value={null}
=======
            renderTestingLib(
                <SortComponent
                    options={[
                        { caption: "Click me", value: "" },
                        { caption: "1", value: "_1" }
                    ]}
                    emptyOptionCaption="Click me"
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                />
            );

            expect(document.body).toHaveFocus();
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

            const input = screen.getByPlaceholderText("Click me");
            await user.click(input);

            jest.runOnlyPendingTimers();

            const items = screen.getAllByRole("menuitem");
            expect(items[0]).toHaveFocus();

            await user.tab();
            expect(items[1]).toHaveFocus();
            await user.tab();

            jest.runOnlyPendingTimers();

            const button = screen.getByRole("button");

            expect(button).toHaveFocus();
        });

        it("changes focused element back to the input when pressing escape on any item", async () => {
<<<<<<< HEAD
            render(
                <SortComponent
                    options={[
                        { caption: "Click me", value: null },
                        { caption: "1", value: "_1" },
                        { caption: "2", value: "_2" }
                    ]}
                    placeholder="Click me"
                    direction="asc"
                    value={null}
=======
            renderTestingLib(
                <SortComponent
                    options={[
                        { caption: "Click me", value: "" },
                        { caption: "1", value: "_1" },
                        { caption: "2", value: "_2" }
                    ]}
                    emptyOptionCaption="Click me"
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
                />
            );
            expect(document.body).toHaveFocus();
            const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

            const input = screen.getByPlaceholderText("Click me");
            await user.click(input);
            jest.runOnlyPendingTimers();

            const items = screen.getAllByRole("menuitem");
            expect(items).toHaveLength(3);
            expect(items[0]).toHaveFocus();

            await user.tab();

            expect(items[1]).toHaveFocus();

            await user.keyboard("{Escape}");

            jest.runOnlyPendingTimers();

            expect(input).toHaveFocus();
        });
    });
});
