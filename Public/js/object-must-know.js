const user = { id: 1, isMarried: false, willSmoke: true }

// İkisi de aynı işlemi yapar (Key value oluşturma)
user.name = "Hüseyin"
user["name"] = "Hüseyin"

// İkisi de aynı işlemi yapar (Value değiştirme)
user.isMarried = true;
user.isMarried = !user.isMarried

// İkisi de aynı işlemi yapar (Key silme)
delete user.willSmoke
delete user["willSmoke"]