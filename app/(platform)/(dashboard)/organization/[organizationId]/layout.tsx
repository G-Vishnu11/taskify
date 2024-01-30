import { OrgControl } from "./_components/org-control";

const OrganizationIdLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <OrgControl />
            Organization Id Layout
        </>
    );
};

export default OrganizationIdLayout;