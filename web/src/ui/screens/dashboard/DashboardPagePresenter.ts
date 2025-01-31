import {Router} from "@/modules/core/Router/Router";
import {DashboardModel} from "@/ui/screens/dashboard/DashboardModel";

export class DashboardPresenter {
    private readonly onModelChangeCallback: (model: DashboardModel) => void;
    model: DashboardModel;

    constructor(private router: Router, initialModel: DashboardModel, onModelChange: (model: DashboardModel) => void) {
        this.model = initialModel;
        this.onModelChangeCallback = onModelChange;
    }

    changeSection = (section: string): void => {
        this.model.section = section;
        this.notifyModelChange();
    };

    logout = (): void => {
        this.router.navigate("/login");
    };

    private notifyModelChange(): void {
        this.onModelChangeCallback(this.model);
    }
}
