-- Execute uma única vez no SQL Editor do Supabase.
alter table public.products
  add column if not exists price_black_friday numeric(10,2),
  add column if not exists is_active boolean not null default true;

-- Produtos já cadastrados permanecem visíveis por padrão.
update public.products set is_active = true where is_active is null;
