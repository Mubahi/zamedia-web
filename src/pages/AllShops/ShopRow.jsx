import React from "react";

export default function ShopRow({ shop, Countries, Areas, onViewShop }) {
  const shop_brands = shop.shop_brands || [];
  const shop_categories = shop.shop_categories || [];
  const shop_products = shop.shop_products || [];
  const shop_windows = shop.shop_windows || [];
  const country = Countries.find((c) => c.country_id === shop.shop_country_id);
  const GetCityName = (city_id) => {
    const city = country.cities.find((c) => c.city_id === city_id);
    return city.city_name;
  };
  const GetAreaName = (area_id) => {
    const area = Areas.find((a) => a.id === area_id);
    return area ? area.name : "";
  };
  // console.log(shop.shop_id);
  return (
    <tr
      onClick={() => onViewShop(shop)}
      className="bg-white border-b hover:bg-orange-50 text-center cursor-pointer"
    >
      <th scope="row" className="px-6 py-3 text-gray-900 whitespace-nowrap">
        <p>{shop.shop_name}</p>
      </th>
      <td className="px-6 py-3">{country.country_name}</td>
      <td className="px-6 py-3">{GetCityName(shop.shop_city_id)}</td>
      <td className="px-6 py-3">{shop.shop_company_name}</td>
      <td className="px-6 py-3">{shop.shop_address}</td>
      <td className="px-6 py-3">{GetAreaName(shop.shop_area_id)}</td>
      <td className="px-6 py-3">
        {shop.shop_opening_hours
          ? shop.shop_opening_hours + " to " + shop.shop_closing_hours
          : ""}
      </td>
      <td className="px-6 py-3">{shop.shop_owner_name}</td>
      <td className="px-6 py-3">{shop.shop_owner_nationality}</td>
      <td className="px-6 py-3">{shop.shop_owner_phone}</td>
      <td className="px-6 py-3">{shop.shop_owner_whatsapp}</td>
      <td className="px-6 py-3">{shop.shop_manager_name}</td>
      <td className="px-6 py-3">{shop.shop_manager_contact}</td>
      <td className="px-6 py-3">{shop.shop_staff_uniform_color}</td>
      <td className="px-6 py-3">
        {shop_brands.map(function (brand, index) {
          return index !== 0 ? ` , ${brand.name}` : brand.name;
        })}
      </td>
      <td className="px-6 py-3">
        {shop_categories.map(function (category, index) {
          return index !== 0 ? ` , ${category.name}` : category.name;
        })}
      </td>
      <td className="px-6 py-3">
        {shop_products.map(function (product, index) {
          return index !== 0 ? ` , ${product.name}` : product.name;
        })}
      </td>
      <td className="px-6 py-3">{shop.shop_website_url}</td>
      <td className="px-6 py-3">{shop.shop_email}</td>
      <td className="px-6 py-3">{shop.shop_social_media}</td>
      <td className="px-6 py-3">{shop.shop_power_days_reach}</td>
      <td className="px-6 py-3">{shop.shop_normal_days_reach}</td>
      <td className="px-6 py-3">{shop_windows.length}</td>
    </tr>
  );
}
