import { NextResponse } from "next/server";

//http://localhost:3000/api/products

const MAGENTO_GRAPHQL_URL = "http://mitre10.loc/graphql";

export async function GET() {
  try {
    const query = `
      query GetProductsByCategory(
        $currentPage: Int
        $pageSize: Int
        $categoryId: String
      ) {
        products(
          currentPage: $currentPage
          pageSize: $pageSize
          filter: {
            category_id: {
              eq: $categoryId
            }
          }
        ) {
          items {
            uid
            sku
            name
            url_key
            stock_status
            small_image {
              url
              label
            }
            price_range {
              minimum_price {
                final_price {
                  value
                  currency
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch(MAGENTO_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Store: "default",
      },
      body: JSON.stringify({
        query,
        variables: {
          currentPage: 1,
          pageSize: 25,
          categoryId: "1701",
        },
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          error: "Magento request failed",
          status: response.status,
          body: text,
        },
        { status: 500 }
      );
    }

    const result = JSON.parse(text);
    
    if (result.errors) {
      return NextResponse.json(
        {
          error: "Magento GraphQL errors",
          details: result.errors,
          fullResult: result,
        },
        { status: 500 }
      );
    } 
    if (!result.data?.products?.items) {

  return NextResponse.json(
    {
      error: "No products items in Magento response",
      fullResult: result,
    },

    { status: 500 }
  );

}

    return NextResponse.json(result.data.products.items);
  } catch (error) {
    return NextResponse.json(
      {
        error: "API route failed",
        message:
          error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}