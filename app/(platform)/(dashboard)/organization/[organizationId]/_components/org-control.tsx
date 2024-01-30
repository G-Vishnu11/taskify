"use client"

import { use, useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

export const OrgControl = () => {
    const params = useParams();
    const { setActive } = useOrganizationList();

    useEffect(() => {
        organization: params.organizationId as string
    }, [setActive, params.organizationId]);

    return null;
};