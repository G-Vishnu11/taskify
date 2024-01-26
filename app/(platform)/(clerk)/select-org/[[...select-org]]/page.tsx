import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <OrganizationList hidePersonal afterCreateOrganizationUrl="/organization/:id" afterSelectOrganizationUrl="/organization/:id"/>
    </div>
  );
}