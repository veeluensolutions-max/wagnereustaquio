"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface ProductViewTrackerProps {
  itemId: string;
  itemName: string;
  itemCategory: string;
  itemStatus?: string;
  price?: number;
  currency?: string;
}

/**
 * Componente cliente para rastreamento de visualização de produtos/cursos (GA4 E-commerce).
 *
 * Características:
 * 1. Dispara o evento canônico `view_item` recomendado pelo GA4.
 * 2. Se não houver preço definido (produto em desenvolvimento/waitlist), NÃO envia valor fictício.
 * 3. Dispara também `view_product` para compatibilidade com o dataLayer customizado.
 */
export default function ProductViewTracker({
  itemId,
  itemName,
  itemCategory,
  itemStatus = "waitlist",
  price,
  currency = "BRL",
}: ProductViewTrackerProps) {
  useEffect(() => {
    const itemData: Record<string, unknown> = {
      item_id: itemId,
      item_name: itemName,
      item_category: itemCategory,
      item_status: itemStatus,
    };

    if (typeof price === "number" && price > 0) {
      itemData.price = price;
      itemData.currency = currency;
    }

    // 1. Evento recomendado do GA4
    trackEvent("view_item", {
      items: [itemData],
      item_name: itemName,
      item_category: itemCategory,
      item_status: itemStatus,
    });

    // 2. Custom event complementar
    trackEvent("view_product", {
      product_name: itemName,
      product_category: itemCategory,
      product_status: itemStatus,
    });
  }, [itemId, itemName, itemCategory, itemStatus, price, currency]);

  return null;
}
