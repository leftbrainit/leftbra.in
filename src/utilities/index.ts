import { RouteRecordNormalized } from "vue-router"
import { NiceRouteName } from "../types"

export function getNiceRouteNames(routes: RouteRecordNormalized[], routeNames?: string[]): NiceRouteName[] {
    const routesWithNiceNames = routes.map(route => {
        const frontmatter: any = route.meta.frontmatter
        return {
            name: route.name as string,
            niceName: frontmatter.name as string ?? route.name as string
        }
    })

    function buildRouteNames(itemName: string): NiceRouteName {
        const route = routesWithNiceNames.find(route => itemName === route.name)
        return {
            name: itemName,
            niceName: route ? route.niceName : itemName
        }
    }

    return routeNames ? routeNames.map(buildRouteNames) : routesWithNiceNames
}

export const springTransition = {
    type: 'spring',
    stiffness: 30,
    damping: 15,
    mass: 2,
}