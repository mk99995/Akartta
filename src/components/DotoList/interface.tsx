type ListOrder = number | "noOrder";

export interface ListItem {
  order: ListOrder;
  content: string;
}
