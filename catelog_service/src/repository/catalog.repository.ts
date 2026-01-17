import { PrismaClient, Product as PrismaProduct } from "@prisma/client";
import { ICatalogRepository } from "../interface/catalogRepository.interface";
import { Product } from "../models/product.model";

export class CatalogRepository implements ICatalogRepository {
  private _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient({
      log: ["error"],
    });
  }

  private mapToPrisma(data: Product) {
    return {
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
    };
  }

  async create(data: Product): Promise<Product> {
    const prismaProduct = await this._prisma.product.create({
      data: this.mapToPrisma(data),
    });

    // convert Prisma type back to your Product entity
    return new Product(
      prismaProduct.name,
      prismaProduct.description,
      prismaProduct.price,
      prismaProduct.stock,
      prismaProduct.id
    );
  }

  async update(data: Product): Promise<Product> {
    const prismaProduct = await this._prisma.product.update({
      where: { id: data.id! }, // id must exist for update
      data: this.mapToPrisma(data),
    });

    return new Product(
      prismaProduct.name,
      prismaProduct.description,
      prismaProduct.price,
      prismaProduct.stock,
      prismaProduct.id
    );
  }

  async delete(id: number): Promise<void> {
    await this._prisma.product.delete({ where: { id } });
  }

  async find(limit: number, offset: number): Promise<Product[]> {
    const products = await this._prisma.product.findMany({
      take: limit,
      skip: offset,
    });

    return products.map(
      (p) => new Product(p.name, p.description, p.price, p.stock, p.id)
    );
  }

  async findOne(id: number): Promise<Product> {
    const p = await this._prisma.product.findUnique({ where: { id } });
    if (!p) throw new Error("product not found");
    return new Product(p.name, p.description, p.price, p.stock, p.id);
  }
}
