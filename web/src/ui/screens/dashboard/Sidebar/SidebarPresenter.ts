import {Router} from "@/modules/core/Router/Router";
import {SidebarModel} from "@/ui/screens/dashboard/Sidebar/SidebarModel";
import {SidebarItem} from "@/ui/screens/dashboard/Sidebar/SidebarItem";

export class SidebarPresenter {
    private readonly onModelChangeCallback: (model: SidebarModel) => void;
    model: SidebarModel;

    constructor(private router: Router, initialModel: SidebarModel, onModelChange: (model: SidebarModel) => void) {
        this.model = initialModel;
        this.onModelChangeCallback = onModelChange;
    }

    toggle = (): void => {
        this.model.isOpen = !this.model.isOpen;
        this.notifyModelChange();
    };

    itemClicked = (item: SidebarItem): void => {
        this.router.navigate(item.path);
        this.notifyModelChange();
    };

    private notifyModelChange(): void {
        this.onModelChangeCallback(this.model);
    }
}