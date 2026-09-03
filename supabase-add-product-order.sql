-- Execute uma única vez no SQL Editor do Supabase.
-- Adiciona a posição manual e preserva a ordem atual dos produtos.

alter table public.products
  add column if not exists sort_order integer;

with ordered_products as (
  select
    id,
    row_number() over (order by created_at desc, id) - 1 as new_sort_order
  from public.products
)
update public.products as product
set sort_order = ordered_products.new_sort_order
from ordered_products
where product.id = ordered_products.id
  and product.sort_order is null;

alter table public.products
  alter column sort_order set default 0;

create index if not exists products_sort_order_idx
  on public.products (sort_order, created_at desc);
