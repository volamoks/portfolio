import { Layout } from '@/components/layout';
import { ProjectPage } from '@/components/projectPage';
import { ReactProjects } from '@/components/reactProjects';
import React from 'react';

export default function id() {
    return (
        <Layout>
            <ReactProjects />
        </Layout>
    );
}
