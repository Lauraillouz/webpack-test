// Using * as instead of calling the whole library allows to use only what's necessary when we use a method and not having to download everything
/* import * as uuid from "uuid"; would work exactly the same as deconstructiong the object and only getting v4 from uuid as below */
import { v4 } from "uuid";

export const wizard = "I'm a wizard" + v4();
