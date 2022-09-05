import Alpine from "alpinejs"
import Mask from "@alpinejs/mask"
import Persist from "@alpinejs/persist"
import Focus from "@alpinejs/focus"
import Collapse from "@alpinejs/collapse"
import NotificationsAlpinePlugin from '../../vendor/filament/notifications/dist/module.esm'
import FormsAlpinePlugin from '../../vendor/filament/forms/dist/module.esm'
import "../../node_modules/flowbite/dist/flowbite"

Alpine.plugin(Mask)
Alpine.plugin(Persist)
Alpine.plugin(Focus)
Alpine.plugin(Collapse)
Alpine.plugin(NotificationsAlpinePlugin)
Alpine.plugin(FormsAlpinePlugin)

window.Alpine = Alpine

Alpine.start()