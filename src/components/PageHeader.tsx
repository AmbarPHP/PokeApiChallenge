interface PageHeaderProps {
    title: string;
    subtitle: string;
}
export function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <header className="my-14">
            <h1 className="text-5xl font-bold mb-3">{title}</h1>
            <h2 className="text-base text-textSecondary">{subtitle}</h2>
        </header>
    );
}