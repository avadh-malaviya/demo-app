import { Navigation } from "@shopify/polaris";
import {
  HomeFilledMinor,
  OrdersFilledMinor,
  ProductsFilledMinor,
  CustomersFilledMinor,
  ContentFilledMinor,
  FinancesMinor,
  AnalyticsFilledMinor,
  MarketingFilledMinor,
  DiscountsFilledMinor,
  OnlineStoreMinor,
  CirclePlusOutlineMinor,
  IconsFilledMajor
} from "@shopify/polaris-icons";

function Sidebar() {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "#",
            label: "Home",
            icon: HomeFilledMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Orders",
            icon: OrdersFilledMinor,
            // badge: "15",
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Products",
            icon: ProductsFilledMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Customers",
            icon: CustomersFilledMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Content",
            icon: ContentFilledMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Finances",
            icon: FinancesMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Analytics",
            icon: AnalyticsFilledMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Marketing",
            icon: MarketingFilledMinor,
          },
          {
            url: "#",
            excludePaths: ["#"],
            label: "Discounts",
            icon: DiscountsFilledMinor,
          },
        ]}
      />
      <Navigation.Section
          title="Sales channels"
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Online Store',
              icon: OnlineStoreMinor,
            },
          ]}
          action={{
            accessibilityLabel: 'Add sales channel',
            icon: CirclePlusOutlineMinor,
            onClick: () => {},
          }}
        />
        <Navigation.Section
          title="Apps"
          items={[
            {
              url: '#',
              excludePaths: ['#'],
              label: 'Trust Badges and icon - Iconito',
              icon: IconsFilledMajor,
            },
          ]}
          action={{
            accessibilityLabel: 'Add apps',
            icon: CirclePlusOutlineMinor,
            onClick: () => {},
          }}
        />
    </Navigation>
  );
}

export default Sidebar;
