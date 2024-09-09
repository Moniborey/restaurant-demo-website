type Messages = typeof import("@/messages/en.json")
type KhMessages = typeof import("@/messages/kh.json")

declare interface IntlMessages extends Messages, KhMessages {}