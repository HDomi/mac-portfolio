import { defineStore } from "pinia";
interface IWindowItem {
  id: string;
  previewId?: string;
  position: { top: number; left: number };
  size: { width: number; height: number };
}
interface IDockApp {
  id: string;
  isDefault?: boolean;
  title: string;
  subTitle: string;
  iconImage: string;
}
export const globalStore = defineStore("global", {
  state: () => ({
    isLoading: false,
    openWindowArr: JSON.parse(localStorage.getItem("OPEN_WINDOW") || "[]"),
    usedAppArr: JSON.parse(localStorage.getItem("USED_APP") || "[]"),
  }),
  getters: {
    getLoading: (state) => state.isLoading,
    getOpenWindowArr: (state) => state.openWindowArr,
    getUsedAppArr: (state) => state.usedAppArr,
  },
  actions: {
    setLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
    //사용한 앱 관련 함수
    setUsedAppArr(usedAppArr: IDockApp[]) {
      this.usedAppArr = usedAppArr;
      localStorage.setItem("USED_APP", JSON.stringify(usedAppArr));
    },
    //윈도우 관련 함수
    setOpenWindowArr(openWindowArr: string[]) {
      this.openWindowArr = openWindowArr;
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(openWindowArr));
    },
    addOpenWindowArr(windowId: string, previewId?: string) {
      const isExist = this.openWindowArr.find(
        (item: IWindowItem) => item.id === windowId
      );
      if (isExist) return;
      const lastWindowPosition =
        this.openWindowArr[this.openWindowArr.length - 1];
      const pushItem: IWindowItem = {
        id: windowId,
        position: lastWindowPosition
          ? {
              top: lastWindowPosition.position.top + 50,
              left: lastWindowPosition.position.left + 50,
            }
          : { top: 32, left: 0 },
        size: {
          width: window.innerWidth < 900 ? window.innerWidth : 900,
          height: 700,
        },
      };
      if (previewId) {
        pushItem.previewId = previewId;
        this.usedAppArr.splice(this.usedAppArr.length - 3, 0, {
          id: windowId,
          title: "Preview",
          subTitle: "포트폴리오의 상세정보입니다.",
          iconImage: require("../assets/images/icons/mac_ic_preview.png"),
        });
      }
      this.openWindowArr.push(pushItem);
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(this.openWindowArr));
    },
    removeOpenWindowArr(windowId: string) {
      const index = this.openWindowArr.findIndex(
        (item: IWindowItem) => item.id === windowId
      );
      if (index === -1) return;
      this.openWindowArr.splice(index, 1);
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(this.openWindowArr));

      const usedAppIndex = this.usedAppArr.findIndex(
        (item: IDockApp) => item.id === windowId && !item.isDefault
      );
      if (usedAppIndex !== -1) {
        this.usedAppArr.splice(usedAppIndex, 1);
        localStorage.setItem("USED_APP", JSON.stringify(this.usedAppArr));
      }
    },
    moveWindow(windowId: string, position: { top: number; left: number }) {
      const index = this.openWindowArr.findIndex(
        (item: IWindowItem) => item.id === windowId
      );
      if (index === -1) return;
      this.openWindowArr[index].position = position;
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(this.openWindowArr));
    },
    resizeWindow(
      windowId: string,
      position: { top: number; left: number },
      size: { width: number; height: number }
    ) {
      const index = this.openWindowArr.findIndex(
        (item: IWindowItem) => item.id === windowId
      );
      if (index === -1) return;
      this.openWindowArr[index].position = position;
      this.openWindowArr[index].size = size;
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(this.openWindowArr));
    },
    changePreviewId(previewId: string) {
      const index = this.openWindowArr.findIndex(
        (item: IWindowItem) => item.id === "preview"
      );
      if (index === -1) return;
      this.openWindowArr[index].previewId = previewId;
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(this.openWindowArr));
    },
    gotoLastWindow(windowId: string) {
      const index = this.openWindowArr.findIndex(
        (item: IWindowItem) => item.id === windowId
      );
      if (index === -1) return;
      this.openWindowArr.push(this.openWindowArr.splice(index, 1)[0]);
      localStorage.setItem("OPEN_WINDOW", JSON.stringify(this.openWindowArr));
    },
  },
});
