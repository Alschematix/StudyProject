import React, { useEffect, useState } from 'react';
import { fetchPageData } from '@/src/db/operations';

interface Content {
    type: string;
    value: string;
}

interface Page {
    id: number;
    title: string;
}

interface PageData {
    resultPage: Page;
    content: (Content | undefined)[];
}

interface PageDataComponentProps {
    pageId: number;
}

// use client
export const PageDataComponentClient: React.FC<PageDataComponentProps> = ({ pageId }) => {
    const [pageData, setPageData] = useState<PageData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPageData(pageId);
            if (data) {
                data.content = data.content.filter(Boolean);
                setPageData(data);
            }
        };

        fetchData();
    }, [pageId]);

    if (!pageData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{pageData.resultPage.title}</h1>
            {pageData.content.map((content, index) => (
                <div key={index}>
                    <h2>{content ? content.type : 'Content offline.'}</h2>
                    <p>{content ? content.value : 'Content offline.'}</p>
                </div>
            ))}
        </div>
    );
};