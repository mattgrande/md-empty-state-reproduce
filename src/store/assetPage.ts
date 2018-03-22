interface ReportAction {
    todo?: string;
}

export interface Breadcrumb {
    title: string;
    url?: string;
}

interface BreadcrumbAction {
    breadcrumbs: Breadcrumb[];
}

export interface TableColumn {
    dataField: string;
    title: string;
    isEditLink?: boolean;
}

export interface AssetPage {
    title: string;
    filters: ReportAction[];
    navigation: BreadcrumbAction;
    actions: ReportAction[];
    canCreate: boolean;
    createButtonText?: string;
    canEdit: boolean;
    canDelete: boolean;
    tableColumns: TableColumn[];
}
