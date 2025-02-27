import { createElement } from "react";
<<<<<<< HEAD
import { render, screen, act } from "@testing-library/react";
=======
import { render, screen } from "@testing-library/react";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import "@testing-library/jest-dom";

import { Tooltip, TooltipProps } from "../Tooltip";
import userEvent from "@testing-library/user-event";

<<<<<<< HEAD
jest.useFakeTimers();

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
describe("Tooltip", () => {
    let defaultTooltipProps: TooltipProps;

    beforeEach(() => {
        defaultTooltipProps = {
            htmlMessage: undefined,
            textMessage: "Tooltip text",
            position: "right",
            openOn: "click",
            trigger: (
                <div tabIndex={0} data-testid="tooltip-trigger">
                    Trigger
                </div>
            ),
            renderMethod: "text",
            name: "tooltip"
        };
    });

    it("render DOM structure", async () => {
        const { asFragment } = render(<Tooltip {...defaultTooltipProps} />);
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByTestId("tooltip-trigger");

        await user.click(triggerElement);
=======
        const triggerElement = screen.getByTestId("tooltip-trigger");

        await userEvent.click(triggerElement);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

        expect(asFragment()).toMatchSnapshot();
    });

    it("opens tooltip onMouseEnter and close onMouseLeave", async () => {
        render(<Tooltip {...defaultTooltipProps} openOn="hover" />);
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByTestId("tooltip-trigger");

        // hover
        await user.hover(triggerElement);
        act(() => {
            jest.advanceTimersByTime(100);
        });
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        // unhover
        await user.unhover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // focus
        await user.keyboard("{Tab}");
=======
        const triggerElement = screen.getByTestId("tooltip-trigger");

        // hover
        await userEvent.hover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        // unhover
        await userEvent.unhover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // focus
        await userEvent.keyboard("{Tab}");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(triggerElement).toEqual(document.activeElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // blur
<<<<<<< HEAD
        await user.keyboard("{Tab}");
=======
        await userEvent.keyboard("{Tab}");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(triggerElement).not.toEqual(document.activeElement);
        expect(screen.queryByRole("tooltip")).toBeNull();
    });

    it("open tooltip onClick", async () => {
        render(<Tooltip {...defaultTooltipProps} openOn="click" />);
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByTestId("tooltip-trigger");
        // hover
        await user.hover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // unhover
        await user.unhover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // focus
        await user.keyboard("{Tab}");
=======
        const triggerElement = screen.getByTestId("tooltip-trigger");
        // hover
        await userEvent.hover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // unhover
        await userEvent.unhover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // focus
        await userEvent.keyboard("{Tab}");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(triggerElement).toEqual(document.activeElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // blur
<<<<<<< HEAD
        await user.keyboard("{Tab}");
=======
        await userEvent.keyboard("{Tab}");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(triggerElement).not.toEqual(document.activeElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // click
<<<<<<< HEAD
        await user.click(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();
        await user.click(triggerElement);
=======
        await userEvent.click(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();
        await userEvent.click(triggerElement);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(screen.queryByRole("tooltip")).toBeNull();
    });

    it("open tooltip onFocus and close onBlur", async () => {
        render(<Tooltip {...defaultTooltipProps} openOn="hoverFocus" />);
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByTestId("tooltip-trigger");

        // hover
        await user.hover(triggerElement);
        act(() => {
            jest.advanceTimersByTime(100);
        });
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        // unhover
        await user.unhover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // focus
        await user.keyboard("{Tab}");
=======
        const triggerElement = screen.getByTestId("tooltip-trigger");

        // hover
        await userEvent.hover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        // unhover
        await userEvent.unhover(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeNull();

        // focus
        await userEvent.keyboard("{Tab}");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(triggerElement).toEqual(document.activeElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        // blur
<<<<<<< HEAD
        await user.keyboard("{Tab}");
=======
        await userEvent.keyboard("{Tab}");
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(triggerElement).not.toEqual(document.activeElement);
        expect(screen.queryByRole("tooltip")).toBeNull();
    });

    it("render text content if the tooltipString is passed", async () => {
        render(<Tooltip {...defaultTooltipProps} renderMethod="text" />);
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByTestId("tooltip-trigger");
        await user.click(triggerElement);
=======
        const triggerElement = screen.getByTestId("tooltip-trigger");
        await userEvent.click(triggerElement);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

        expect(screen.queryByRole("tooltip")).toHaveTextContent(defaultTooltipProps.textMessage as string);
    });

    it("render HTML if the content is passed", async () => {
        render(
            <Tooltip
                {...defaultTooltipProps}
                renderMethod="custom"
                htmlMessage={<div>Simple Tooltip</div>}
                textMessage={undefined}
            />
        );
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

        const triggerElement = screen.getByTestId("tooltip-trigger");
        await user.click(triggerElement);
=======

        const triggerElement = screen.getByTestId("tooltip-trigger");
        await userEvent.click(triggerElement);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

        expect(screen.queryByText("Simple Tooltip")).toBeInTheDocument();
    });

    it("close onOutsideClick if tooltip is visible", async () => {
        render(<Tooltip {...defaultTooltipProps} openOn="click" />);
<<<<<<< HEAD
        const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
        const triggerElement = screen.getByTestId("tooltip-trigger");
        await user.click(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        await user.click(document.body);
=======
        const triggerElement = screen.getByTestId("tooltip-trigger");
        await userEvent.click(triggerElement);
        expect(screen.queryByRole("tooltip")).toBeInTheDocument();

        await userEvent.click(document.body);
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
        expect(screen.queryByRole("tooltip")).toBeNull();
    });
});
