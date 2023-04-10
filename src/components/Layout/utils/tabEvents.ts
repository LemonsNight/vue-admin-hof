import router from "@/router";
export const handleRefreshPage = () => {
  // const { replace } = useRouter();
  console.log(router.currentRoute.value);
  const { path, query } = router.currentRoute.value;
  return router.replace({
    path: "/redirect" + path,
    query,
  });
};
