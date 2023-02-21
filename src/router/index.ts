import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/Layout/Layout.js";
import { user } from "@/router/modules/user";
import { example } from "@/router/modules/example";
import { setupRouter } from "./setupRouter";
import { network } from "@/router/modules/network";

const { beforeEach, beforeResolve, afterEach } = setupRouter();
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...user, ...example, ...network],
});

beforeEach(router);
// beforeResolve(router);
afterEach(router);

export default router;
