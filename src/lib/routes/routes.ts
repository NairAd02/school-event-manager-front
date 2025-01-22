export interface Route {
  path: string;
}

export interface Routes {
  events: Route;
  event: (eventId: string) => Route;
  paper: (eventId: string, paperId: string) => Route;
}

export const routes: Routes = {
  events: { path: "/events" },
  event: (id: string) => ({ path: `/events/${id}` }),
  paper: (eventId: string, paperId: string) => ({
    path: `/events/${eventId}/paper/${paperId}`,
  }),
};
