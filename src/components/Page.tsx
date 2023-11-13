interface PageProps {
    PageNumber: number;
};

const Page: React.FC<PageProps> = ({ PageNumber: pageNumber }) => {
    console.log('pageNumber: ', pageNumber);
    return (<>{pageNumber}</>);
};

export default Page;