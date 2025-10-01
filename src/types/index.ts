export interface ComparisonItem {
    criterion: string;
    tyumen: string;
    national: string;
    link?: string;
}

export interface IndicatorComparison {
    tyumen: string;
    national: string;
    link: string;
    type: 'direct' | 'indirect';
}

export interface AdaptationItem {
    from: string;
    howToAdapt: string;
}

export interface ImprovementStep {
    title: string;
    description: string;
    formula?: string;
}

export interface ConclusionItem {
    type: 'conclusion' | 'recommendation';
    text: string;
}
