/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen } from "@testing-library/react";
import Basket from "./Basket";
import { useLocation, useNavigate } from "react-router-dom";
import { BasketContext, BasketItem } from "context/BasketContext";
import { act } from "react";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

afterEach(() => {
  jest.resetAllMocks();
});

describe("<Basket />", () => {
  it("should render all correct items when items are in the basket", async () => {
    const mockBasket = {
      basket: [
        {
          id: 1,
          name: "Item 1",
          price: 20.0,
          quantity: 1,
          description: "A description",
        },
        {
          id: 2,
          name: "Item 2",
          price: 2.0,
          quantity: 10,
          description: "A description",
        },
      ] as BasketItem[],
      clearBasket: jest.fn(),
      modifyBasket: jest.fn(),
      removeItem: jest.fn(),
      getTotalCost: () => 40,
    };
    const mockLocation = { pathname: "/products" };
    const mockNavigate = jest.fn();

    (useLocation as jest.Mock).mockReturnValue(mockLocation);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    await act(async () => {
      render(
        <BasketContext.Provider value={mockBasket}>
          <Basket />
        </BasketContext.Provider>
      );
    });

    await screen.findByText("Basket");
    await screen.findByText("Item 1");
    await screen.findByText("£20 x 1");
    await screen.findByText("Item 2");
    await screen.findByText("£2 x 10");
    await screen.findByText("Total amount");
    await screen.findByText("£40");
    await screen.findByText("Clear Basket");
    await screen.findByText("PAY");
  });

  it("should call modifyBasket with correct params when the 'remove one' button is pressed", async () => {
    const mockModifyBasket = jest.fn();
    const mockBasket = {
      basket: [
        {
          id: 1,
          name: "Item 1",
          price: 20.0,
          quantity: 2,
          description: "A description",
        },
      ] as BasketItem[],
      clearBasket: jest.fn(),
      modifyBasket: mockModifyBasket,
      removeItem: jest.fn(),
      getTotalCost: () => 20,
    };
    const mockLocation = { pathname: "/products" };
    const mockNavigate = jest.fn();

    (useLocation as jest.Mock).mockReturnValue(mockLocation);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    await act(async () => {
      render(
        <BasketContext.Provider value={mockBasket}>
          <Basket />
        </BasketContext.Provider>
      );
    });

    const element = await screen.findByTestId("delete-one-1");
    fireEvent.click(element);

    expect(mockModifyBasket).toBeCalledWith({
      description: "A description",
      id: 1,
      name: "Item 1",
      price: 20,
      quantity: -1,
    });
    expect(mockModifyBasket).toBeCalledTimes(1);
  });

  it("should call removeItem with correct params when the 'remove all' button is pressed", async () => {
    const mockRemoveItem = jest.fn();
    const mockBasket = {
      basket: [
        {
          id: 1,
          name: "Item 1",
          price: 20.0,
          quantity: 2,
          description: "A description",
        },
      ] as BasketItem[],
      clearBasket: jest.fn(),
      modifyBasket: jest.fn,
      removeItem: mockRemoveItem,
      getTotalCost: () => 20,
    };
    const mockLocation = { pathname: "/products" };
    const mockNavigate = jest.fn();

    (useLocation as jest.Mock).mockReturnValue(mockLocation);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    await act(async () => {
      render(
        <BasketContext.Provider value={mockBasket}>
          <Basket />
        </BasketContext.Provider>
      );
    });
    const element = await screen.findByTestId("delete-all-1");
    fireEvent.click(element);

    //The remove item is called with a copy of the basket item object, hence the quantity 2
    expect(mockRemoveItem).toBeCalledWith({
      description: "A description",
      id: 1,
      name: "Item 1",
      price: 20,
      quantity: 2,
    });
    expect(mockRemoveItem).toBeCalledTimes(1);
  });

  it("should show 'back to products button on /basket route", async () => {
    const mockBasket = {
      basket: [
        {
          id: 1,
          name: "Item 1",
          price: 20.0,
          quantity: 1,
          description: "A description",
        },
        {
          id: 2,
          name: "Item 2",
          price: 2.0,
          quantity: 10,
          description: "A description",
        },
      ] as BasketItem[],
      clearBasket: jest.fn(),
      modifyBasket: jest.fn(),
      removeItem: jest.fn(),
      getTotalCost: () => 40,
    };
    const mockLocation = { pathname: "/basket" };
    const mockNavigate = jest.fn();

    (useLocation as jest.Mock).mockReturnValue(mockLocation);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    await act(async () => {
      render(
        <BasketContext.Provider value={mockBasket}>
          <Basket />
        </BasketContext.Provider>
      );
    });

    await screen.findByText("Back to products");
  });
});
