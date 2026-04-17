import { services, majorCategories } from '@/data/services';
import CategoryPageClient from './CategoryPageClient';

export async function generateStaticParams() {
  return majorCategories.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const category = majorCategories.find((c) => c.id === id);
  return {
    title: `${category?.name || 'Services'} — Xerodirt`,
    description: category?.shortDesc || 'Browse Xerodirt services.',
  };
}

export default async function CategoryPage({ params }) {
  const { id } = await params;
  const category = majorCategories.find((c) => c.id === id);

  if (!category) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1>Category Not Found</h1>
        </div>
      </section>
    );
  }

  // Resolve sub-category service data from the main services array
  const resolvedSubCategories = category.subCategories.map((sub) => {
    const serviceData = services.find((s) => s.id === sub.originalRef);
    return {
      ...sub,
      tiers: serviceData?.tiers || [],
      image: serviceData?.image || category.image,
      heroImage: serviceData?.heroImage || category.image,
    };
  });

  return (
    <CategoryPageClient
      category={category}
      subCategories={resolvedSubCategories}
    />
  );
}
